{
    "interactionModel": {
        "languageModel": {
            "invocationName": "nintendo",
            "intents": [
                {
                    "name": "AMAZON.CancelIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.HelpIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.StopIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.NavigateHomeIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.FallbackIntent",
                    "samples": []
                },
                {
                    "name": "GetSmashMoves",
                    "slots": [
                        {
                            "name": "CharacterName",
                            "type": "Character"
                        },
                        {
                            "name": "Move",
                            "type": "Action"
                        }
                    ],
                    "samples": [
                        "what is {CharacterName} {Move} called",
                        "what is {CharacterName} {Move}",
                        "does is {Move} with {CharacterName}",
                        "What is the name of {CharacterName} {Move}"
                    ]
                }
            ],
            "types": [
                {
                    "name": "Action",
                    "values": [
                        {
                            "name": {
                                "value": "down b",
                                "synonyms": [
                                    "down special"
                                ]
                            }
                        },
                        {
                            "name": {
                                "value": "Up b",
                                "synonyms": [
                                    "up special"
                                ]
                            }
                        },
                        {
                            "name": {
                                "value": "B",
                                "synonyms": [
                                    "just B",
                                    "Basic B",
                                    "Normal B",
                                    "neutral B"
                                ]
                            }
                        },
                        {
                            "name": {
                                "value": "Side B",
                                "synonyms": [
                                    "Left Special",
                                    "Right Special",
                                    "Side Special ",
                                    "Right b",
                                    "Left B"
                                ]
                            }
                        }
                    ]
                },
                {
                    "name": "Character",
                    "values": [
                        {
                            "name": {
                                "value": "Captain Falcon",
                                "synonyms": [
                                    "Falcon's",
                                    "Captain Falcon's",
                                    "Falcon"
                                ]
                            }
                        },
                        {
                            "name": {
                                "value": "Fox",
                                "synonyms": [
                                    "Fox's"
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    }
}
