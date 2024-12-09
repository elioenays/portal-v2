export function WeekDayColumn({ day }: { day: string }) {
  return (
    <div className="flex justify-center max-w-60">
      <span>{day}</span>
    </div>
  )
}
