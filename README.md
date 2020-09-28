# loading-before-saving-form
When the form is saved, wait for some events that have not yet been loaded. For example: upload files etc.

 [![npm package](https://img.shields.io/npm/v/loading-before-saving-form.svg?style=flat-square)](https://www.npmjs.org/package/loading-before-saving-form) 
 [![NPM downloads](http://img.shields.io/npm/dm/loading-before-saving-form.svg?style=flat-square)](http://npmjs.com/loading-before-saving-form)

 ## Description

 Usually when you submit a form to save data, and you find a file in the form that is being uploaded, you do this by reminding the user that the file is being uploaded, and that the user needs to click submit again.

 So there are two problems:

 1. How do you know that a file is being uploaded in the form? What if it is a multi-form?

 2. How do you know when all files have been uploaded?

 This gadget solves both of these problems.

 After using this gadget, you don't have to care when the file is uploaded or set the loading status of Submit when the file is uploaded.

 ## Using

 * Get ready: Install the gadget. 

 ```bash
  yarn add loading-before-saving-form
 ```

 * Record the ID of the form, as well as the ID of the file.

 ```js
  const formId = 'formId';

 ```

 * Call `setLoadingStatus` before and after file upload

 ```js 

 import { setLoadingStatus } from 'loading-before-saving-form';
 import request from './service'; // upload file server.

 const uploadFile = async (key: string) => {
   const option = {
     formId,
     key, // file id
     status: true
   }
   setLoadingStatus(option);

   await request('....'); // upload file

   option.status = true;
   setLoadingStatus(option);
 }

 ```

* Add `saveBeforeLoading` to the submit button before the event

```js

  const submit = async (formId, formData) => {
    await saveBeforeLoading(formId);

    saveData(formData); // submit data function
  }

```