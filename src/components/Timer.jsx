const Timer = ({ seconds, minutes }) => {
  return (
    <div className="flex justify-center gap-2 items-center">
      <div className="text-[#F6734B] text-[15px] font-semibold">{minutes}</div>
      <span className="text-[#F6734B] text-[15px] font-semibold">:</span>
      <div className="text-[#F6734B] text-[15px] font-semibold">{seconds}</div>
    </div>
  );
};

export default Timer;
