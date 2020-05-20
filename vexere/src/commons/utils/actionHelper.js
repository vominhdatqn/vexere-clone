export const createActionSet = (actionName, extraField = []) => {
  const actionType = {
    NAME: actionName,
    PENDING: `${actionName}_PENDING`,
    SUCCESS: `${actionName}_SUCCESS`,
    ERROR: `${actionName}_ERROR`,
  };
  extraField.forEach(field => {
    actionType[field] = `${actionName}_${field}`;
  });

  return actionType;
};
