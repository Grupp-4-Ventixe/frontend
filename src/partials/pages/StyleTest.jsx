import '../../styles/button.css';

const StyleTest = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <button className="button button-primary" style={{ marginRight: '1rem' }}>Button</button>
      <button className="button button-secondary" style={{ marginRight: '1rem' }}>Button</button>
      <button className="button button-ghost">Button</button>
    </div>
  );
};


export default StyleTest;
