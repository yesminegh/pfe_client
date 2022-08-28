import { gql, QueryHookOptions } from '@apollo/client';
import { useLocalQuery } from 'hooks/apollo';
import { Icategory } from './category.types';

const GET_Category = gql`
  query categorys {
    categorys {
      data {
        id
        name
      }
    }
  }
`;
export const useCategory = (options: QueryHookOptions<{ categorys: { data: Icategory[] } }, {}> = {}) =>
  useLocalQuery(GET_Category, options);
