import { EventCategory } from "@/constants/Enums";

export const handleChangeColor = (type: string) => {
  switch (type) {
    case EventCategory.Donation:
      return "rgba(0, 255, 0, 0.5)";

    case EventCategory.Vacancy:
      return "rgba(255, 255, 0, 0.5)";

    default:
      return "rgba(0, 81, 255, 0.5)";
  }
};

export const handleCategory = (category: string) => {
  switch (category) {
    case EventCategory.Donation:
      return "Doação";

    case EventCategory.Vacancy:
      return "Voluntário";

    default:
      return category;
  }
};
