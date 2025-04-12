import { Avatar, Card, CardBody, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';

import { dataCookingBlogsProps } from '~/shared/CookingBlogs/consts/dataCookingBlogs';

export const CardCookBlog = ({
    urlToImage,
    titleName,
    nickName,
    review,
}: dataCookingBlogsProps) => (
    <Card>
        <CardHeader
            flexDirection='row'
            display='flex'
            gap={['2', null, '3']}
            p={['16px 16px 8px 16px']}
        >
            <Avatar name={titleName} src={urlToImage} size={['sm', 'sm']} />

            <Flex direction='column'>
                <Heading
                    size='base'
                    as='h5'
                    fontSize={['16px', null]}
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
                    fontSize={['14px', null]}
                    fontWeight='400'
                    fontFamily='Inter'
                    lineHeight={['16px', '20px']}
                    color='blackAlpha.700'
                >
                    {nickName}
                </Text>
            </Flex>
        </CardHeader>
        <CardBody p={['8px 16px 16px 16px']}>
            <Text
                size='xs'
                fontWeight='400'
                fontFamily='Inter'
                lineHeight={['16px', '20px']}
                noOfLines={[3, 3]}
            >
                {review}
            </Text>
        </CardBody>
    </Card>
);
