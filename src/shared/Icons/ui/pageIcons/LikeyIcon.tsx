import { Icon } from '@chakra-ui/react';

export const LikeyIcon = ({ size = '16px' }) => (
    <Icon
        viewBox='0 0 16 16'
        color='currentColor'
        boxSize={{ size }}
        // boxSize={{ base: '16px', md: '24px' }}
    >
        <path
            d='M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16V16Z'
            fill='currentColor'
        />
        <path
            d='M11.315 10.014C11.41 9.9917 11.5094 9.9976 11.601 10.031C11.6926 10.0644 11.7724 10.1239 11.8307 10.2021C11.8889 10.2804 11.923 10.3739 11.9288 10.4713C11.9345 10.5686 11.9117 10.6655 11.863 10.75C11.4682 11.4344 10.9 12.0027 10.2157 12.3977C9.53141 12.7926 8.75515 13.0004 7.96505 13C7.17494 13.0004 6.39868 12.7926 5.71439 12.3977C5.0301 12.0027 4.46192 11.4344 4.06705 10.75C4.01842 10.6655 3.99558 10.5686 4.00133 10.4713C4.00708 10.3739 4.04118 10.2804 4.09942 10.2021C4.15766 10.1239 4.2375 10.0644 4.32912 10.031C4.42073 9.9976 4.52012 9.9917 4.61505 10.014H4.62005L4.63705 10.019L4.70405 10.034L4.95605 10.089C5.17105 10.135 5.47105 10.197 5.81305 10.258C6.50605 10.382 7.33505 10.5 7.96505 10.5C8.59505 10.5 9.42505 10.382 10.117 10.258C10.4883 10.1913 10.858 10.1166 11.226 10.034L11.293 10.019L11.31 10.015L11.315 10.013V10.014ZM4.75605 4.56605C5.51905 3.14205 8.77605 4.44605 5.70805 8.00005C1.21205 6.40405 3.35805 3.70205 4.75605 4.56605ZM11.244 4.56605C12.642 3.70205 14.788 6.40405 10.292 8.00005C7.22505 4.44605 10.482 3.14205 11.244 4.56605Z'
            fill='currentColor'
        />
    </Icon>
);
