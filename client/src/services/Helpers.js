import PortfolioService from '@/services/PortfolioService';

export default {
  async getAllFeaturedProjects() {
    let featuredProjects = [];
    // Get all projects from server and add to portfolioProjects
    await PortfolioService.getFeaturedProjects("coding/featured")
    .then((res) => {
      if(res !== "err") {
        res.forEach((project) => {
          featuredProjects.push(project);
        });
      };
    });
    await PortfolioService.getFeaturedProjects("art/featured")
    .then((res) => {
      if(res !== "err") {
        res.forEach((project) => {
          featuredProjects.push(project);
        });
      };
    });

    return featuredProjects;
  }

}
