import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import StepIndicator from "react-native-step-indicator";
import styles from "./complaintscreen.style";
import { SafeAreaView } from "react-native-safe-area-context";
import Stepone from "./Stepone";
import Steptwo from "./Steptwo";
import Stepthree from "./Stepthree";
import Steplast from "./Steplast";
import { COLORS } from "../constants";
import { CRIME_LABELS } from "../constants/data";

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: COLORS.primary,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: COLORS.primary,
  stepStrokeUnFinishedColor: COLORS.gray2,
  separatorFinishedColor: COLORS.primary,
  separatorUnFinishedColor: COLORS.gray2,
  stepIndicatorFinishedColor: COLORS.primary,
  stepIndicatorUnFinishedColor: COLORS.WHITE,
  stepIndicatorCurrentColor: COLORS.WHITE,
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: COLORS.primary,
  stepIndicatorLabelFinishedColor: COLORS.WHITE,
  stepIndicatorLabelUnFinishedColor: COLORS.gray2,
  labelColor: COLORS.gray2,
  labelSize: 13,
  currentStepLabelColor: COLORS.primary,
};

const ComplaintScreen = ({ navigation }) => {
  const stepCount = CRIME_LABELS.length;
  const [currentPage, setCurrentPage] = useState(0); // Initialize the current page
  const [formData, setFormData] = useState({});

  const handleSubmit = () => {};
  // Function to navigate to the next step
  const onNext = () => {
    setCurrentPage(currentPage + 1);
  };

  // Function to navigate to the previous step
  const onPrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View>
          <Text style={styles.upperText}>Report a crime</Text>
        </View>
        <StepIndicator
          currentPosition={currentPage}
          stepCount={stepCount}
          labels={CRIME_LABELS}
          customStyles={customStyles}
        />

        {/* Render form fields for the current step */}
        {currentPage === 0 && (
          <Stepone
            onNext={onNext}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {currentPage === 1 && (
          <Steptwo
            onNext={onNext}
            onPrevious={onPrevious}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {currentPage === 2 && (
          <Stepthree
            onNext={onNext}
            onPrevious={onPrevious}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {currentPage === 3 && (
          <Steplast
            onNext={onNext}
            onPrevious={onPrevious}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {currentPage === 4 && (
          <View style={styles.submissionContainer}>
            <Text style={styles.sectionHeaderText}>Report Submitted</Text>
            <Text style={styles.subHeaderText}>
              Thanks for submitting all the information.{"\n\n"} We'll
              Investigate the data and get back to you within 48hours, with a
              crime refrenece number for future tracking of status of the
              investigation.
            </Text>
            <View style={styles.submitContainer}>
              <TouchableOpacity
                style={styles.btnSubmit}
                onPress={() => navigation.replace("Bottom Navigation")}
              >
                <Text style={styles.btnText}>Go Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </SafeAreaView>
      {/* Step Indicator */}
    </ScrollView>
  );
};

export default ComplaintScreen;
