import { Button, Flex, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Loading from '~/app/Loading/Loading';
import { CardRecipe } from '~/entities/Card';
import { EmptyRecipesBlock } from '~/shared/helpers/EmptyRecipesBlock';
import { useGetRecipesForJuiciestQuery } from '~/store/apiQuery/marathonApi';
import { Recipe } from '~/store/model/categoryType';

export const RecipesSections = () => {
    const [page, setPage] = useState(1);
    const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);

    const {
        data: newResipesSortedLikes,
        isLoading: catsLoading,
        error: catsError,
    } = useGetRecipesForJuiciestQuery({
        page: page,
        sortBy: 'likes',
        sortOrder: 'desc',
    });

    useEffect(() => {
        if (newResipesSortedLikes && newResipesSortedLikes.data.length > 0) {
            setAllRecipes((prevRecipes) => [...prevRecipes, ...newResipesSortedLikes.data]);
        }
    }, [newResipesSortedLikes, page]);

    if (catsError) return <div>An error has occurred!</div>;

    if (catsLoading) return <Loading />;

    const addRecipes = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const options = newResipesSortedLikes?.meta;

    return (
        <Flex direction='column' pb='26' w='100%'>
            {allRecipes.length > 0 ? (
                <>
                    <SimpleGrid columns={[1, 1, 2, 2, 2, 2]} w='100%' gap='16px 24px'>
                        {allRecipes.map((dataCard, index) => (
                            <CardRecipe key={dataCard._id} {...dataCard} index={index} />
                        ))}
                    </SimpleGrid>
                    {options && options.page < options.total && (
                        <Flex justify='center' align='center' pt='4'>
                            <Button
                                variant='solid'
                                size='md'
                                color='black'
                                bg='lime.300'
                                onClick={addRecipes}
                            >
                                Загрузить еще
                            </Button>
                        </Flex>
                    )}
                </>
            ) : (
                <EmptyRecipesBlock message='По вашему запросу ничего не найдено' />
            )}
        </Flex>
    );
};
