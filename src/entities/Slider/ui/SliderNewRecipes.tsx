import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, Heading, IconButton } from '@chakra-ui/react';
import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Loading from '~/app/Loading/Loading';
import { CardSlider } from '~/entities/Card';
import { useGetRecipesForSliderQuery } from '~/store/apiQuery/marathonApi';

export const SliderNewRecipes = () => {
    const { data: dataRecipes, isLoading } = useGetRecipesForSliderQuery();
    const dataForSlidersCards = dataRecipes?.data;
    const swiperRef = useRef<SwiperType | null>(null);

    if (isLoading) return <Loading />;
    return (
        <Flex as='section' direction='column' gap='6' pt={[0, 5]} w='100%' position='relative'>
            <Heading
                as='h3'
                fontSize={['24px', null, null, '36px', '48px']}
                lineHeight={['32px', null, '40px', '48px']}
                fontWeight='500'
                fontFamily='Inter'
            >
                Новые рецепты
            </Heading>
            <Flex w='100%' position='relative'>
                <IconButton
                    aria-label='Предыдущий слайд'
                    icon={<ArrowBackIcon />}
                    onClick={() => swiperRef.current?.slidePrev()}
                    position='absolute'
                    left={['-10px', '-20px', '-30px']}
                    top='50%'
                    transform='translateY(-50%)'
                    zIndex='10'
                    bg='black'
                    color='white'
                    boxShadow='md'
                    _hover={{ bg: 'gray.100', color: 'black' }}
                    size='lg'
                    variant='solid'
                    display={['none', null, null, 'block']}
                    data-test-id='carousel-back'
                />

                <Swiper
                    data-test-id='carousel'
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    speed={500}
                    loop={dataForSlidersCards ? true : false}
                    modules={[Navigation]}
                    breakpoints={{
                        200: {
                            slidesPerView: 1,
                            spaceBetween: 12,
                        },
                        300: {
                            slidesPerView: 2,
                            spaceBetween: 12,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 12,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 12,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 12,
                        },
                        1400: {
                            slidesPerView: 3,
                            spaceBetween: 12,
                        },
                        1480: {
                            slidesPerView: 3,
                            spaceBetween: 12,
                        },
                        1500: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                        1920: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                    }}
                >
                    {dataForSlidersCards &&
                        dataForSlidersCards.map((dataForSlide, index) => (
                            <SwiperSlide key={dataForSlide._id}>
                                <CardSlider {...dataForSlide} index={index} />
                            </SwiperSlide>
                        ))}
                </Swiper>

                <IconButton
                    aria-label='Следующий слайд'
                    icon={<ArrowForwardIcon />}
                    onClick={() => swiperRef.current?.slideNext()}
                    position='absolute'
                    right={['-10px', '-20px', '-30px']}
                    top='50%'
                    transform='translateY(-50%)'
                    zIndex='10'
                    bg='black'
                    color='white'
                    boxShadow='md'
                    _hover={{ bg: 'gray.100', color: 'black' }}
                    size='lg'
                    variant='solid'
                    display={['none', null, null, 'block']}
                    data-test-id='carousel-forward'
                />
            </Flex>
        </Flex>
    );
};
