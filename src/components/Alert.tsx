interface IProps {
  children: any;
}
function Alert({ children }: IProps) {
  const htmlContent = children;
  return (
    <>
      <div className="alert alert-primary">
        <span dangerouslySetInnerHTML={{ __html: htmlContent }}></span>
      </div>
    </>
  );
}

export default Alert;
