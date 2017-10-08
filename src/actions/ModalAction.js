export const SHOW_MODALS = 'SHOW_MODALS';
export const CALL_MODALS_REMOVE = 'CALL_MODALS_REMOVE';
export const CALL_MODALS_CREATE = 'CALL_MODALS_CREATE';
export const CALL_MODALS_EDIT = 'CALL_MODALS_EDIT';

export const showModals = () => ({ type: SHOW_MODALS });
export const callModalsRemove = call => ({ type: CALL_MODALS_REMOVE, call });
export const callModalsCreate = call => ({ type: CALL_MODALS_CREATE, call });
export const callModalsEdit = call => ({ type: CALL_MODALS_EDIT, call });
