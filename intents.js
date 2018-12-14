{
    "interactionModel": {
        "languageModel": {
            "invocationName": "smash facts",
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
                            "id": "DOWN_B",
                            "name": {
                                "value": "down b",
                                "synonyms": [
                                    "down special"
                                ]
                            }
                        },
                        {
                            "id": "UP_B",
                            "name": {
                                "value": "Up b",
                                "synonyms": [
                                    "up special"
                                ]
                            }
                        },
                        {
                            "id": "B",
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
                            "id": "SIDE_B",
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
                            "id": "C.Falcon",
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
                            "id": "Fox",
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
