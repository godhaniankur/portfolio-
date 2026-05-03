import mongoose from "mongoose";

const developerSuggestionSchema = new mongoose.Schema(
  {
    developerName: {
      type: String,
      required: true,
      trim: true
    },  

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },

    testingEnvironment: {
      type: String,
      enum: ["Local", "Development", "Staging / QA", "Production"],
      default: "Staging / QA"
    },

    suggestionCategory: {
      type: String,
      enum: [
        "Bug Report",
        "Feature Request",
        "Data Issue",
        "API Improvement",
        "Other"
      ],
      default: "Feature Request"
    },

    suggestionDetails: {
      type: String,
      required: true,
      trim: true
    },

    status: {
      type: String,
      enum: ["Pending", "Reviewing", "Resolved"],
      default: "Pending"
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model(
  "DeveloperSuggestion",
  developerSuggestionSchema
);