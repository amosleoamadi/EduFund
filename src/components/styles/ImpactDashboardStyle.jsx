import styled from "styled-components";

export const ImpactContainer = styled.div`
  padding: 40px 5%;
  color: #001145;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 5px;
  }

  .subtitle {
    color: #5f6c7b;
    margin-bottom: 30px;
  }
`;

export const SummaryCards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: linear-gradient(135deg, #031b88, #0177ff);
  padding: 25px;
  border-radius: 14px;
  color: #fff;
  text-align: center;
  margin-bottom: 50px;
  gap: 15px;
`;

export const SummaryCard = styled.div`
  flex: 1;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 350ms ease-in-out;

  .icon {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }

  p {
    opacity: 0.9;
  }
`;

export const SuccessStories = styled.div`
  h3 {
    margin-bottom: 20px;
    color: #001145;
  }
`;

export const StoryCard = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  padding: 20px;
  margin-bottom: 20px;
  gap: 20px;
  transition: all 350ms ease-in-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
  }

  .status {
    background: #e6f9ee;
    color: #12b76a;
    font-size: 0.8rem;
    padding: 2px 6px;
    border-radius: 4px;
    margin-left: 5px;
  }

  .course {
    font-size: 0.9rem;
    color: #444;
  }

  .school {
    font-size: 0.85rem;
    color: #777;
  }
`;

export const Tag = styled.div`
  background: #f0e6ff;
  color: #7a33cc;
  display: inline-block;
  padding: 3px 8px;
  font-size: 0.8rem;
  border-radius: 5px;
  margin-top: 5px;
`;

export const StoryDetails = styled.div`
  flex: 2;

  .story {
    font-size: 0.9rem;
    color: #444;
    margin-bottom: 8px;
    font-style: italic;
  }

  .role {
    font-size: 0.85rem;
    color: #666;
  }
`;

export const StoryRight = styled.div`
  text-align: right;
  min-width: 200px;

  h5 {
    font-size: 0.9rem;
    color: #666;
  }

  h2 {
    color: #001145;
    margin: 5px 0;
  }
`;

export const StoryTags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;

  span {
    background: #e6f9ee;
    color: #12b76a;
    font-size: 0.8rem;
    padding: 3px 8px;
    border-radius: 4px;
  }
`;
