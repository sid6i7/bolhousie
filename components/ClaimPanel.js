import { validateClaim, CLAIMS } from '@/utils/gameUtils';
import styles from './ClaimPanel.module.css';

export default function ClaimPanel({ ticket, markedIds, onClaim }) {
  
  const handleClaim = (claimType) => {
    // Optional: Pre-validate locally to save network traffic
    if (validateClaim(ticket, markedIds, claimType)) {
      onClaim(claimType);
    } else {
      alert(`You don't have a valid ${claimType} yet! Check your ticket.`);
    }
  };

  return (
    <div className={styles.panel}>
      <h4>Make a Claim</h4>
      <div className={styles.buttons}>
        {Object.values(CLAIMS).map(claim => (
          <button 
            key={claim} 
            className="retro-btn secondary" 
            style={{ fontSize: '1.1rem', padding: '12px 20px', fontWeight: '600' }}
            onClick={() => handleClaim(claim)}
          >
            {claim} 📢
          </button>
        ))}
      </div>
    </div>
  );
}
