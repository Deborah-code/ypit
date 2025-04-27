import React, { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  Font,
} from "@react-pdf/renderer";
import type { CareerRecommendation, UserProfile } from "@/types/interfaces";

// styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    backgroundColor: "#ECECEC",
    borderRadius: 5,
  },
  header: {
    backgroundColor: "#5100BF",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  subHeaderText: {
    color: "#FFFFFF",
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#3A3A3A",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#3A3A3A",
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    color: "#3A3A3A",
  },
  bold: {
    fontWeight: "bold",
  },
  bulletItem: {
    flexDirection: "row",
    marginBottom: 5,
  },
  bullet: {
    width: 10,
    fontSize: 12,
  },
  bulletText: {
    fontSize: 12,
    flex: 1,
  },
  skillTag: {
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
    padding: 4,
    marginRight: 4,
    marginBottom: 4,
    fontSize: 10,
  },
  skillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
    marginBottom: 10,
  },
  matchScore: {
    backgroundColor: "rgba(128, 128, 128, 0.2)",
    borderRadius: 4,
    padding: 3,
    fontSize: 10,
    marginLeft: 5,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 10,
    color: "#8E8D8D",
  },
  resourceType: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
});

// Define the PDF Document component
const CareerReportDocument = ({
  recommendation,
  userProfile,
}: {
  recommendation: CareerRecommendation;
  userProfile: UserProfile;
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Career Match Report</Text>
        <Text style={styles.subHeaderText}>
          Prepared for {userProfile.firstName}
        </Text>
      </View>

      {/* Summary Section */}
      <View style={styles.section}>
        <Text style={styles.title}>Summary</Text>
        <Text style={styles.text}>
          Based on your assessment results, here's what we found:
        </Text>

        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>•</Text>
          <View style={styles.bulletText}>
            <Text>
              <Text style={styles.bold}>Primary strengths: </Text>
              {recommendation.summary.primaryStrengths.join(", ")}
            </Text>
          </View>
        </View>

        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>•</Text>
          <View style={styles.bulletText}>
            <Text>
              <Text style={styles.bold}>Career direction: </Text>
              {recommendation.summary.careerDirection}
            </Text>
          </View>
        </View>

        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>•</Text>
          <View style={styles.bulletText}>
            <Text>
              <Text style={styles.bold}>Development Areas: </Text>
              {recommendation.summary.developmentAreas.join(", ")}
            </Text>
          </View>
        </View>
      </View>

      {/* Career Matches Section */}
      <View style={styles.section}>
        <Text style={styles.title}>Top Career Matches</Text>

        {recommendation.careerMatches.map((match, index) => (
          <View key={index} style={{ marginBottom: 15 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.sectionTitle}>{match.role}</Text>
              <Text style={styles.matchScore}>{match.matchScore}% match</Text>
            </View>

            <Text style={styles.text}>{match.description}</Text>

            <Text
              style={{
                ...styles.text,
                color: "#626262",
                fontSize: 10,
                marginTop: 5,
              }}
            >
              Top Skills required
            </Text>

            <View style={styles.skillsRow}>
              {match.requiredSkills.map((skill, skillIndex) => (
                <Text key={skillIndex} style={styles.skillTag}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Learning Path Section */}
      <View style={styles.section}>
        <Text style={styles.title}>Recommended Learning Paths</Text>

        {/* Immediate Steps */}
        <View style={{ marginBottom: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.sectionTitle}>Next Steps</Text>
            <Text style={styles.matchScore}>Immediate</Text>
          </View>

          {recommendation.learningPath.immediateSteps.map((step, index) => (
            <View key={index} style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>{step}</Text>
            </View>
          ))}
        </View>

        {/* Resources */}
        {recommendation.learningPath.recommendedResources.map(
          (resource, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.resourceType}>{resource.type}</Text>
                <Text style={styles.matchScore}>Resource</Text>
              </View>

              {resource.links.map((link, linkIndex) => (
                <View key={linkIndex} style={styles.bulletItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>{link}</Text>
                </View>
              ))}
            </View>
          )
        )}

        {/* Long Term Goals */}
        <View style={{ marginBottom: 15, marginTop: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.sectionTitle}>Long Term Goals</Text>
            <Text style={styles.matchScore}>Future</Text>
          </View>

          {recommendation.learningPath.longTermGoals.map((goal, index) => (
            <View key={index} style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>{goal}</Text>
            </View>
          ))}
        </View>

        {/* Additional Resources Note */}
        <View style={{ marginTop: 15 }}>
          <Text
            style={{ ...styles.text, fontStyle: "italic", color: "#626262" }}
          >
            Looking for more learning resources?
          </Text>
          <Text style={styles.text}>
            Explore additional courses on Coursera, edX, and other leading
            platforms
          </Text>
        </View>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        Made with love by the YPIT Innovation Hub | Generated on{" "}
        {new Date().toLocaleDateString()}
      </Text>
    </Page>
  </Document>
);

interface DownloadButtonProps {
  recommendation: CareerRecommendation;
  userProfile: UserProfile;
}

const DownloadReportButton: React.FC<DownloadButtonProps> = ({
  recommendation,
  userProfile,
}) => {
  const [isGenerating, setIsGenerating] = useState(false);

  return (
    <div className="pdf-download-button">
      <PDFDownloadLink
        document={
          <CareerReportDocument
            recommendation={recommendation}
            userProfile={userProfile}
          />
        }
        fileName={`${userProfile.firstName}_career_report.pdf`}
        className="flex items-center justify-center py-[10px] px-[15px] bg-white text-purple-100 rounded-xl font-semibold text-sm hover:bg-purple-20 transition-colors disabled:opacity-70"
        onClick={() => setIsGenerating(true)}
      >
        {({ blob, url, loading, error }) =>
          loading || isGenerating ? "Generating PDF..." : "Download Report PDF"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default DownloadReportButton;
