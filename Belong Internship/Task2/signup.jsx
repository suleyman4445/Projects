import React, { useState } from 'react';

const PowtoonSignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const getPasswordStrength = (password) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[\W_]/.test(password)) score++;
    if (score <= 2) return { text: 'Weak', className: 'strength-weak' };
    if (score <= 4) return { text: 'Medium', className: 'strength-medium' };
    return { text: 'Strong', className: 'strength-strong' };
  };

  const validateForm = () => {
    let valid = true;

    if (!name.trim()) {
      setNameError('Full name is required.');
      valid = false;
    } else {
      setNameError('');
    }

    if (!email.trim()) {
      setEmailError('Email address is required.');
      valid = false;
    } else if (!isValidEmail(email.trim())) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required.');
      setPasswordStrength('');
      valid = false;
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters.');
      setPasswordStrength('');
      valid = false;
    } else {
      setPasswordError('');
      const strength = getPasswordStrength(password);
      setPasswordStrength(`Password strength: ${strength.text}`);
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        alert('Signup successful! Welcome to Powtoon.');
        setIsSubmitting(false);
        setName('');
        setEmail('');
        setPassword('');
        setPasswordStrength('');
      }, 1500);
    }
  };

  return (
    <section style={styles.signupContainer} aria-labelledby="signup-title" role="main">
      <div style={styles.logo} aria-label="Powtoon company logo and title">
        <img 
          src="powtoon_logo.png" 
          alt="Powtoon logo" 
          width="40" 
          height="40" 
          style={{ display: 'block', userSelect: 'none', pointerEvents: 'none' }}
        />
        <div style={styles.logoText}>POWTOON</div>
      </div>
      <h2 id="signup-title" style={styles.title}>Create your account</h2>
      <form onSubmit={handleSubmit} noValidate style={{ width: '100%' }}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-describedby="nameError"
            aria-invalid={!!nameError}
            style={styles.input}
          />
          {nameError && (
            <span id="nameError" role="alert" style={styles.errorMessage}>{nameError}</span>
          )}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@example.com"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="emailError"
            aria-invalid={!!emailError}
            style={styles.input}
          />
          {emailError && (
            <span id="emailError" role="alert" style={styles.errorMessage}>{emailError}</span>
          )}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="At least 8 characters"
            autoComplete="new-password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-describedby="passwordError passwordStrength"
            aria-invalid={!!passwordError}
            style={styles.input}
          />
          {passwordError && (
            <span id="passwordError" role="alert" style={styles.errorMessage}>{passwordError}</span>
          )}
          {passwordStrength && (
            <div
              id="passwordStrength"
              aria-live="polite"
              style={{
                ...styles.passwordStrength,
                ...(passwordStrength.includes('Weak') ? styles.strengthWeak : {}),
                ...(passwordStrength.includes('Medium') ? styles.strengthMedium : {}),
                ...(passwordStrength.includes('Strong') ? styles.strengthStrong : {}),
              }}
            >
              {passwordStrength}
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            ...styles.submitButton,
            backgroundColor: isSubmitting ? '#99c2e6' : '#007acc',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            boxShadow: isSubmitting ? 'none' : '0 8px 30px rgba(0, 122, 204, 0.6)',
          }}
        >
          {isSubmitting ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
      <div style={styles.footerText}>
        Already have an account?{' '}
        <a href="#" tabIndex="0" style={styles.signupLink} onClick={(e) => { e.preventDefault(); alert('Redirecting to login page...'); }}>
          Log in
        </a>
      </div>
    </section>
  );
};

const styles = {
  signupContainer: {
    background: '#fff',
    color: '#004a75',
    borderRadius: 16,
    maxWidth: 420,
    width: '100%',
    padding: '40px 30px',
    boxShadow: '0 8px 30px rgba(0, 163, 224, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    userSelect: 'none',
    margin: 'auto',
    minHeight: '100vh',
    justifyContent: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
    userSelect: 'text',
  },
  logoText: {
    fontSize: '2.2rem',
    fontWeight: 900,
    color: '#007acc',
    letterSpacing: 2,
  },
  title: {
    fontSize: '1.8rem',
    fontWeight: 700,
    marginBottom: 24,
    textAlign: 'center',
    color: '#004a75',
    userSelect: 'text',
  },
  formGroup: {
    marginBottom: 20,
    position: 'relative',
    width: '100%',
  },
  label: {
    display: 'block',
    marginBottom: 8,
    fontWeight: 600,
    color: '#004a75',
    userSelect: 'text',
  },
  input: {
    width: '100%',
    padding: '14px 16px',
    borderRadius: 8,
    border: '2px solid #ccc',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    userSelect: 'text',
    outline: 'none',
  },
  errorMessage: {
    color: '#d93025',
    fontSize: '0.875rem',
    marginTop: 6,
    position: 'absolute',
    bottom: -22,
    left: 0,
    userSelect: 'text',
  },
  passwordStrength: {
    fontSize: '0.875rem',
    marginTop: 4,
    fontWeight: 600,
    userSelect: 'text',
  },
  strengthWeak: {
    color: '#d93025',
  },
  strengthMedium: {
    color: '#fbbc04',
  },
  strengthStrong: {
    color: '#34a853',
  },
  submitButton: {
    width: '100%',
    padding: 14,
    background: '#007acc',
    color: 'white',
    fontWeight: 700,
    fontSize: '1.1rem',
    borderRadius: 12,
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 8px 30px rgba(0, 122, 204, 0.6)',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    userSelect: 'none',
  },
  footerText: {
    marginTop: 20,
    fontSize: '0.9rem',
    textAlign: 'center',
    color: '#004a75',
    userSelect: 'text',
  },
  signupLink: {
    color: '#007acc',
    fontWeight: 700,
    textDecoration: 'none',
    cursor: 'pointer',
    userSelect: 'text',
    transition: 'color 0.3s ease',
  },
};

export default PowtoonSignupForm;
