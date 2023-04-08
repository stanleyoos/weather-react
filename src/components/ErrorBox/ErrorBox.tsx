import styles from './ErrorBox.module.scss'

const ErrorBox = ({ children }: any) => {
  return (
    <div className={styles.errorBox}>
      <h1>
        <span className="fa fa-exclamation-triangle" />
        Error
      </h1>
      <p>{children}</p>
    </div>
  )
}

export default ErrorBox
