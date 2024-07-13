import CarouselContent from "@/components/shared/carousel";

const Carousel = () => {
  const img = ["1", "2", "3", "4", "5"];

  return (
    <div className="relative w-full flex flex-col gap-5">
      <CarouselContent item={img}>
        {img?.map((_, id) => {
          return (
            <div
              key={id}
              className="w-full flex-shrink-0 bg-primary p-5 rounded-xl"
            >
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit
            </div>
          );
        })}
      </CarouselContent>
      <div>
        <p>With dot</p>
        <CarouselContent item={img} showDots>
          {img?.map((_, id) => {
            return (
              <div
                key={id}
                className="w-full flex-shrink-0 bg-primary p-5 rounded-xl"
              >
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit
              </div>
            );
          })}
        </CarouselContent>
      </div>
    </div>
  );
};

export default Carousel;
