import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-[calc(100vh-88px)] gap-10 py-16 md:flex-row-reverse">
      <div className="flex items-center flex-1 md:justify-center">
        <img src={bannerImg} alt="books" />
      </div>

      <div className="flex-1">
        <h1 className="text-2xl font-medium md:text-5xl">
          New Releases This Week
        </h1>
        <p className="my-8 text-slate-600 lg:w-[46ch]">
          It's time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week's new releases offer something for
          everyone
        </p>

        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
  );
};

export default Banner;
