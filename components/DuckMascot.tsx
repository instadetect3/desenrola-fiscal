export default function DuckMascot() {
  return (
    <div className="flex items-end justify-center lg:justify-start">

      <div className="scale-110 lg:scale-125 -mb-7 -mt-5">
        <img
          src="/pato.png"
          alt="Adalberto, o Fiscalito"
          className="
            w-[260px]
            sm:w-[320px]
            lg:w-[420px]
            xl:w-[480px]
            h-auto
            object-contain
            drop-shadow-[0_8px_25px_rgba(0,0,0,0.08)]
          "
        />
      </div>

    </div>
  )
}