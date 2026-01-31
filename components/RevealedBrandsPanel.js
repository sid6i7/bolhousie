import { useState } from 'react';
import styles from './RevealedBrandsPanel.module.css';

/**
 * A collapsible panel showing all brands that have been revealed so far.
 * Used by the host to verify player claims.
 */
export default function RevealedBrandsPanel({ history = [] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (history.length === 0) {
    return null;
  }

  const revealedBrands = history.map(h => h.name);

  return (
    <div className={styles.panel}>
      <button 
        className={styles.header} 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className={styles.title}>
          ✅ Revealed Brands ({history.length})
        </span>
        <span className={styles.toggle}>
          {isExpanded ? '▲' : '▼'}
        </span>
      </button>
      
      {isExpanded && (
        <div className={styles.content}>
          <p className={styles.hint}>
            Use this to verify player claims. All these brands have been shown:
          </p>
          <div className={styles.brandGrid}>
            {history.map((brand, index) => (
              <div key={brand.id} className={styles.brandChip}>
                <span className={styles.brandNumber}>{index + 1}.</span>
                <span className={styles.brandName}>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
