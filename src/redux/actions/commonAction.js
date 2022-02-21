import { SHOW_SPINNER, HIDE_SPINNER, TOAST_MESSAGE } from "../constants";

export const ShowSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const HideSpinner = () => {
  return {
    type: HIDE_SPINNER,
  };
};

export const showToast = (toastType, toastMsg) => ({
  type: TOAST_MESSAGE,
  payload: { toastType, toastMsg },
});
