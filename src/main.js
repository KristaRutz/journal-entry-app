import './bootstrap.css';
import './styles.css';
import { Entry } from './entry';

$(document).ready(function() {
  $("#new-journal-entry-form").submit(function(event){
    event.preventDefault();
    console.log("submitted");
    var entry = new Entry ($("#entry-heading").val(), $("#entry-body").val());
    console.log(entry);
     $("#wordCount").text("Word Count: " + entry.numberOfWords());
     $("#vowelCount").text("Vowel Count: " + entry.numberOfVowels());
     $("#consCount").text("Consonant Count: " + entry.numberOfConsonants());
     $("#teaser").text("Preview: " + entry.heading + " - " + entry.getTeaser() + "...............");
  });
});