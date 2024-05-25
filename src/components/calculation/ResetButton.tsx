interface ResetButtonProps {
  onReset: () => void
}
export function ResetButton({ onReset }: ResetButtonProps) {
  return (
    <button className="calculation__reset" onClick={onReset}>
      Reset
    </button>
  )
}
