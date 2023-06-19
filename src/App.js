
import './index.css';
import ContactList from './components/ContactList';
import ContactContext from './context/ContactContext';

function App() {
  return (
    <div className='container-xl'>
      <div className="table-responsive">
        <div className="table-wrapper">

          <ContactContext>
            <ContactList />
          </ContactContext>
        </div>
      </div>
    </div>
  );
}

export default App;
