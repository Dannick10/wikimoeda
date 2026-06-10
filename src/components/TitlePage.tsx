
type TitlePageProps ={
  title: string;
  description: string;
  icon: string;
}

export const TitlePage = ({title, description, icon}: TitlePageProps) => {
    return (
      <header className="border-b border-gray-800 pb-5">
        <div className="flex items-center gap-3 justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold text-white tracking-wide" data-aos="fade-right" data-aos-duration="600">
              {title}
            </h1>
            <p className="text-xs text-gray-500">{description}</p>
          </div>
          <div className="bg-gray-900/50 p-2.5 rounded-xl border border-gray-800 text-lime-400 shadow-sm">
            <i className={`fa-solid ${icon} text-base`} />
          </div>
        </div>
      </header>
    )
}