import React from 'react'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators, userActionCreators } from './stores/actionCreators';

const App = () => {
  const nameRef = useRef();
  const phoneRef = useRef();
  const account = useSelector(state => state.account);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const { add, remove } = bindActionCreators(actionCreators, dispatch);
  const { insert, drop } = bindActionCreators(userActionCreators, dispatch);
  const addUser = (e) => {
    e.preventDefault();
    let user = {
      phone: phoneRef.current.value,
      name: nameRef.current.value
    }
    insert(user);
    phoneRef.current.value = '';
    nameRef.current.value = '';
  }
  return (
   
    <div>
    <div> {account}</div>
    {
      user.map(user => <p>{user.name}: {user.phone}</p>)
    }
    <button onClick={() => add(1)}>Add</button>
    <button onClick={() => remove(1)}>Remove</button><br/><br/>

    <form onSubmit={addUser}>      
      <input type='phone' ref={phoneRef} /> <br/><br/>
      <input type='name' ref={nameRef} />
      <input type='submit' />
    </form>
    </div>
  )
}

export default App