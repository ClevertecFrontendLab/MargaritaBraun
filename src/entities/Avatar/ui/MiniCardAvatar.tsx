// import { Flex, Heading, Image } from '@chakra-ui/react';

// import AvatarImg from '~/assets/Breakfast.png';

// export const MiniCardAvatar = () => {
//     const textName = 'Екатерина Константинопольская';
//     const textLink = '@bake_and_pie';
//     return (
//         <Flex
//             direction='row'
//             align='center'
//             overflow='hidden'
//             variant='outline'
//             paddingX='24px'
//             maxW='432px'
//             justify='flex-end'
//             gap='12px'
//             bg="#FFFFD3"
//         >
//             <Image
//                 objectFit='cover'
//                 boxSize='48px'
//                 src={AvatarImg}
//                 alt='Avatar image'
//                 borderRadius='100'
//                 objectPosition='center'
//             />

//             <Box>
//                 <Heading as='h3' size='lg' fontSize='18px' fontWeight='500'>
//                     {textName}
//                 </Heading>
//                 <Heading
//                     as='h5'
//                     size='lg'
//                     lineHeight='20px'
//                     fontWeight='400'
//                     color='blackAlpha.700'
//                 >
//                     {textLink}
//                 </Heading>
//             </Box>
//         </Flex>
//     );
// };

import { Card, CardBody, Heading, Image } from '@chakra-ui/react';

import AvatarImg from '~/assets/Breakfast.png';

export const MiniCardAvatar = () => {
    const textName = 'Екатерина Константинопольская';
    const textLink = '@bake_and_pie';
    return (
        <Card
            direction='row'
            align='center'
            // overflow='hidden'
            variant='unstyled'
            paddingX='24px'
            maxW='432px'
            justify='flex-end'
            gap='12px'
            bg='#FFFFD3'
        >
            <Image
                objectFit='cover'
                boxSize='48px'
                src={AvatarImg}
                alt='Avatar image'
                borderRadius='100'
                objectPosition='center'
            />

            <CardBody>
                <Heading as='h3' size='lg' fontSize='18px' fontWeight='500'>
                    {textName}
                </Heading>
                <Heading
                    as='h5'
                    size='sm'
                    lineHeight='20px'
                    fontWeight='400'
                    color='blackAlpha.700'
                >
                    {textLink}
                </Heading>
            </CardBody>
        </Card>
    );
};
