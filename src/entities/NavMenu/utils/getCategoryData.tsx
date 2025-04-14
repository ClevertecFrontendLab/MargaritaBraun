import navigationData from '../const/navigationData';

const getCategoryData = (category: string) => {
    const data = navigationData.filter((item) => category === item.label);
    return data[0];
};

export default getCategoryData;
