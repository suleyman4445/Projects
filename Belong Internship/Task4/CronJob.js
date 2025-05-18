// cronJob.js
const cron = require('node-cron');
const nodemailer = require('nodemailer');
const { Sequelize, DataTypes } = require('sequelize');

// Database connection
const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres' // or 'mysql'
});

// User model
const User = sequelize.define('User ', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

// Function to get daily applications count
const getDailyApplicationsCount = async () => {
    const result = await User.count({
        where: {
            createdAt: {
                [Sequelize.Op.gt]: new Date(Date.now() - 24 * 60 * 60 * 1000) // Last 24 hours
            }
        }
    });
    return result;
};

// CRON job setup
cron.schedule('0 0 * * *', async () => {
    try {
        const count = await getDailyApplicationsCount();

        // Configure Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or 'outlook', 'sendgrid', etc.
            auth: {
                user: 'your_email@gmail.com', // Your email
                pass: 'your_email_password' // Your email password or app password
            }
        });

        // Send email
        await transporter.sendMail({
            from: 'your_email@gmail.com',
            to: 'admin@example.com', // Recipient email
            subject: 'Daily Applications Report',
            text: `Total Applications Received in Last 24 Hours: ${count}`
        });

        console.log('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
    }
});
