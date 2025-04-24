import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, Heading, IconButton } from '@chakra-ui/react';
import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CardSlider } from '~/entities/Card';
import dataAllCategory from '~/shared/consts/dataAllCategory';

export const SliderNewRecipes = () => {
    const sortedRecipes = dataAllCategory.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
    const dataForSlidersCards = sortedRecipes.slice(0, 10);
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <Flex as='section' direction='column' gap='6' pt={[0, 5]} w='100%' position='relative'>
            <Heading
                as='h3'
                fontSize={['24px', '36px', '48px']}
                lineHeight={['48px', '40px', '32px']}
                fontWeight='500'
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
                    loop={true}
                    modules={[Navigation]}
                    breakpoints={{
                        200: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        300: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1400: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        // 1440: {
                        //     slidesPerView: 3,
                        //     spaceBetween: 40,
                        // },
                        1480: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1500: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1920: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                >
                    {dataForSlidersCards &&
                        dataForSlidersCards.map((dataForSlide, i) => (
                            <SwiperSlide key={dataForSlide.id}>
                                <CardSlider {...dataForSlide} data-test-id={`carousel-card-${i}`} />
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
