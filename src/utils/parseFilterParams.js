const parseContactType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;

  const contactType = (type) => ['work', 'home', 'personal'].includes(type);
  if (contactType(type)) return type;
};

export const parseFilterParams = (query) => {
  const { contactType } = query;
  const parsedContactType = parseContactType(contactType);

  return {
    contactType: parsedContactType,
  };
};
