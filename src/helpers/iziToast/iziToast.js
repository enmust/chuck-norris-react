import iziToast from "izitoast";

export function toastSuccess(params) {
  if (typeof params.timeout === 'undefined') params.timeout = 2000;

  iziToast.success({
    timeout: params.timeout,
    title: 'Success',
    closeOnClick: true,
    displayMode: 'replace',
    message: params.text ? params.text : 'Successful action'
  });
}

export function toastError(params) {
  if (typeof params.timeout === 'undefined') params.timeout = 3000;

  iziToast.error({
    timeout: params.timeout,
    title: 'Error',
    closeOnClick: true,
    displayMode: 'replace',
    message: params.text.length > 0 ? params.text : 'Something went wrong'
  });
}

export function toastInfo(params) {
  if (typeof params.timeout === 'undefined') params.timeout = 2000;

  iziToast.info({
    timeout: params.timeout,
    title: 'Info',
    closeOnClick: true,
    displayMode: 'replace',
    message: params.text ? params.text : 'Information'
  });
}
