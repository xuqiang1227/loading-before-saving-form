import { setLoadingStatus, saveBeforeLoading } from "../src/index";


test("test_saveBeforeLoading", async (done) => {
  setLoadingStatus({
    formId: '1',
    key: '1',
    status: true
  });
  setLoadingStatus({
    formId: '1',
    key: '2',
    status: true
  });

  setLoadingStatus({
    formId: '1',
    key: '1',
    status: false
  });

  saveBeforeLoading("1").then((data) => {
    console.log('loaded!!!');
    expect(data).toBe('done');
  });

  console.log('save is loading...')

  setTimeout(() => {
    setLoadingStatus({
      formId: '1',
      key: '2',
      status: false
    });
    done();
  }, 2000);

});