import { Image, Wrapper } from "./CastItem.styled";

export const CastItem = ({ actor }) => {
    const { profile_path, name, character } = actor;
    return (
        <Wrapper>
            <Image src={`https://image.tmdb.org/t/p/original${profile_path}`} alt={name} />
            <h2>{name}</h2>
            <p>Character: {character}</p>
        </Wrapper>
    )
};

