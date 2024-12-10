import { useQuery, gql } from '@apollo/client'

import {useParams} from 'react-router-dom';

import Spinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const CollectionPageContainer = () => {
    const {collectionId} = useParams();


    const GET_COLLECTIONS_BY_TITLE = gql`
        	{ getCollectionsByTitle(title: "${collectionId}") {       
                    id
                    title
                    items {
                        id 
                        name
                        price
                        imageUrl
                    }
            }
}
`

    const { loading, error, data } = useQuery(GET_COLLECTIONS_BY_TITLE);
            if (loading) return <Spinner/>;
            if (data); 
                const { getCollectionsByTitle } = data;
            return (
                <CollectionPage collection={getCollectionsByTitle} />
            )
};

export default CollectionPageContainer;
