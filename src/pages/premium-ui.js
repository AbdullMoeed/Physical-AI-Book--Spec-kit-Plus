import PremiumUI from '@site/src/components/PremiumUI';
import '@site/src/css/premium-ui.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function PremiumUIDesign() {
  return (
    <div>
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">Premium UI Design</h1>
          <p className="hero__subtitle">Modern, responsive UI with dark/light theme toggle</p>
        </div>
      </header>
      <main>
        <PremiumUI />
      </main>
    </div>
  );
}