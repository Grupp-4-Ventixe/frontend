import '../../styles/button.css';
import Header from '../../components/Header/Header';

const StyleTest = () => {
  return (
    <div>
      <Header
        title="Dashboard"
        breadcrumb="Dashboard"
      />

      <button className="button button-primary" style={{ marginRight: '1rem' }}>Button</button>
      <button className="button button-secondary" style={{ marginRight: '1rem' }}>Button</button>
      <button className="button button-ghost">Button</button>
    </div>
  );
};

export default StyleTest;

