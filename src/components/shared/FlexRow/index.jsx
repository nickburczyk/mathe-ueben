import css from './FlexRow.module.scss'

export const FlexRow = ({ children, style }) => {
  return (
    <div className={css.row} style={style}>
      {children}
    </div>
  )
}
