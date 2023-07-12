export const openFormHandler = (methodName, eventForUpdate, dayItem, setEvent, defaultEvent, setMethod ) => {
  setEvent(eventForUpdate || {...defaultEvent, date: dayItem.format('X')});
  setMethod(methodName);
};

export const openModalFormHandler = (methodName, eventForUpdate, dayItem, setIsShowForm) => {
  setIsShowForm(true);
  openFormHandler(methodName, eventForUpdate, dayItem);
};

export const cancelFormHandler = (setIsShowForm, setEvent) => {
  setIsShowForm(false);
  setEvent(null);
};

export const changeEventHandler = (text, field, setEvent) => {
  setEvent(prev => ({
    ...prev,
    [field]: text
  }))
};