const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected || state.isFocused ? '#FF6596' : '#000000',
    backgroundColor:
      state.isSelected || state.isFocused ? '#FFFFFF' : 'inherit',
    paddingLeft: 20,
    paddingTop: 13,
    height: 44,
    border: 'none',
    cursor: 'pointer',
  }),
  menu: provided => ({
    ...provided,
    filter:
      'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    borderRadius: 20,
    backgroundColor: 'inherit',
  }),
  menuList: provided => ({
    ...provided,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(50px)',
    borderRadius: 20,
  }),
  control: () => ({
    width: 408,
    height: 34,
  }),
  placeholder: provided => ({
    ...provided,
    color: '#BDBDBD',
    fontSize: 18,
    lineHeight: 1.44,
  }),
  valueContainer: provided => ({
    ...provided,
    paddingLeft: 20,
    paddingBottom: 10,
    maxHeight: 34,
  }),
  indicatorsContainer: () => ({
    display: 'none',
  }),
  container: provided => ({
    ...provided,
    borderBottom: '1px solid #BDBDBD',
    cursor: 'pointer',
    marginBottom: 40,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

export default customStyles;
