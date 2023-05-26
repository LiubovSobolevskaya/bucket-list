import React, { useState } from 'react';
import BucketForm from './BucketForm';
import BucketList from './BucketList';
function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  console.log(props.bucket);

  const submitUpdate = (value) => {

    // TODO: Write logic to update the `edit` value in state after a user updates an entry in the list
    setEdit({ id: value.id }, { value: value.value }, { eagerness: value.eagerness });
    BucketList.addBucketItem(edit);
    // TODO: Set the key:value pairs in the `edit` object back to empty strings
    setEdit({
      id: null,
      value: '',
      eagerness: ''
    });

  };

  // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.bucket.map((item, index) => (
    // TODO: Add a className of `bucket row complete ${item.eagerness}` for completed items, and `bucket-row ${item.eagerness}` for non-completed items
    // TODO: Add a key attribute set to the value of the index position
    // Hint: use a ternary operator
    <div className={item.complete ? `bucket row complete ${item.eagerness}` : `bucket-row ${item.eagerness}`} key={item.id}>
      <div key={item.id} onClick={BucketList.completeBucketItem(item.id)}>
        {item.value}
      </div>
      <div className="icons">
        <p onClick={BucketList.editBucketItem(item.id, item.value, item.eagerness)}> ✏️</p>
        {/* TODO: Add an onClick event that will invoke the removeBucketItem method passing in the `item.id` */}
        <p onClick={BucketList.removeBucketItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
