import styles from './RevealedBrands.module.css';

/**
 * RevealedBrands - Displays all brands that have been called/revealed during the game.
 * This helps the host verify player claims by checking if all claimed brands 
 * have actually been shown.
 */
export default function RevealedBrands({ history = [] }) {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <h4 className={styles.title}>
          📋 Revealed Brands
        </h4>
        <span className={styles.count}>
          {history.length} called
        </span>
      </div>
      
      {history.length === 0 ? (
        <div className={styles.emptyState}>
          No brands revealed yet. Start the game!
        </div>
      ) : (
        <div className={styles.brandGrid}>
          {history.map((brand, index) => (
            <div key={brand.id} className={styles.brandChip}>
              <span className={styles.brandNumber}>{index + 1}</span>
              {brand.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
