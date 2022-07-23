import "./../styles/content-section.css";

/**
 * Content Section component renders content (mainly text/mdown based)
 * for track and module details
 */
const ContentSection = ({ children }) => {
  return <div>{children}</div>;
};

export default ContentSection;

/** ContentSection styled component */
/* const ContentDiv = styled.div({
  marginTop: 10,
  display: 'flex',
  flexDirection: 'column',
  maxWidth: widths.textPageWidth,
  width: '100%',
  alignSelf: 'center', */
/*   backgroundColor: colors.background,
 */
