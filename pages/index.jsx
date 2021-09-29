/** @jsxRuntime classic */
/** @jsx jsx */
import {Heading, Grid, Container, Flex, Box, jsx} from 'theme-ui';
import Popular from '../src/components/Popular';
import handler from './api/popular-movies'
import Search from '../src/components/Search';
import Movie from "./movie";
import MovieHome from "./movie";

// create a red velvet curtain loading page animation that opens as the page loads
// make the cards flip open one by one as they turn into different shades of pastel
// move the title up to a ticket as the title glows gold
// make the title a ticket image
const Page = ({content: { results }}) => {

    return (
        <div>
            <Container p={2} pt={3}>
                <Flex sx={{justifyContent: 'center'}}>
                    <Heading>
                        Movies!!!!
                    </Heading>
                </Flex>
            </Container>
            <Container p={3}>
                <Grid>
                    <Popular movies={results} />
                </Grid>
                <Container pt={2}>
                    <Flex sx={{justifyContent: 'center'}}>
                        <Grid columns={['1fr']}>
                            <Search />
                        </Grid>
                    </Flex>
                </Container>
            </Container>
        </div>
    );
}

export async function getStaticProps() {
    const response = await fetch(`http://localhost:3000/api/popular-movies`);
    const { data: { results } } = await response.json();

    return {
        props: {
            content: {
                results
            }
        }
    }
}

export default Page;
