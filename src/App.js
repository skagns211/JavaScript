import React from 'react';
import { Toggle } from './components/Toggle';
import { Modal } from './components/Modal';
import { Tag } from './components/Tag';
import { Autocomplete } from './components/Autocomplete';
import { ClickToEdit } from './components/ClickToEdit';
import { Tab } from './components/Tab';
import './app.css';

const App = () => {
  return (
    <>
      <div id='container'>
        <div id='title'>BMW Experience</div>
        <div className='box'>
          <div className='sub_title'>Modal</div>
          <Modal />
        </div>
        <div className='box'>
          <div className='sub_title'>Toggle</div>
          <Toggle />
        </div>
        <div className='box tab'>
          <div className='sub_title'>Tab</div>
          <Tab />
        </div>
        <div className='box'>
          <div className='sub_title'>Tag</div>
          <Tag />
        </div>
        <div className='box auto'>
          <div className='sub_title'>Autocomplete</div>
          <Autocomplete />
        </div>
        <div className='box'>
          <div className='sub_title'>ClickToEdit</div>
          <ClickToEdit />
        </div>
      </div>
    </>
  );
};
export default App;
