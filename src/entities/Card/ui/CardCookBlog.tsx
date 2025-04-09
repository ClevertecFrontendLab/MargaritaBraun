import { Avatar, Box, Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react';

import { dataCookingBlogsProps } from '~/shared/CookingBlogs/consts/dataCookingBlogs';

export const CardCookBlog = ({
    urlToImage,
    titleName,
    nickName,
    review,
}: dataCookingBlogsProps) => (
    <Card>
        <CardHeader flexDirection='row' display='flex' gap='3'>
            <Avatar name={titleName} src={urlToImage} />

            <Box>
                <Heading
                    size='base'
                    as='h5'
                    fontWeight='500'
                    fontFamily='Inter'
                    lineHeight={['20px', '28px']}
                    noOfLines={1}
                >
                    {titleName}
                </Heading>
                <Text
                    size='xs'
                    as='h6'
                    fontWeight='400'
                    fontFamily='Inter'
                    lineHeight={['16px', '20px']}
                    color='blackAlpha.700'
                >
                    {nickName}
                </Text>
            </Box>
        </CardHeader>
        <CardBody>
            <Text size='xs' fontWeight='400' fontFamily='Inter' lineHeight={['16px', '20px']}>
                {review}
            </Text>
        </CardBody>
    </Card>
);
