public class Solution {
    public int RomanToInt(string s) {
        if (Validate(s))
            {
                int sum = 0;
                for (int i = 0; i < s.Length; i++)
                {
                    if (i !=  s.Length-1)
                    {
                        if (s[i] == 'I')
                        {
                            if (s[i+1] == 'V' || s[i+1] == 'X')
                            {
                                sum += Transcribe(s,i+1) - Transcribe(s,i);
                                i++;
                            } else {
                                sum += Transcribe(s,i);
                            }
                        }
                        else if (s[i] == 'X')
                        {
                            if (s[i+1] == 'L' || s[i+1] == 'C')
                            {
                                sum += Transcribe(s,i+1) - Transcribe(s,i);
                                i++;
                            } else {
                                sum += Transcribe(s,i);
                            }
                        }
                        else if (s[i] == 'C')
                        {
                            if (s[i+1] == 'D' || s[i+1] == 'M')
                            {
                                sum += Transcribe(s,i+1) - Transcribe(s,i);
                                i++;
                            } else {
                                sum += Transcribe(s,i);
                            }
                        }
                        else
                        {
                            sum += Transcribe(s,i);
                        }
                    }
                    else {
                        sum += Transcribe(s,i);
                    }

                }
                return sum;
            }
            else
            {
                return 0;
            }
        
    }

    public int Transcribe(string s, int i){
        switch (s[i]){
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return 0;
        }
    }
    public bool Validate(string s){
        bool Validation = true;
        if (s.Length >= 1 && s.Length <= 15)
        {
            foreach (char item in s)
            {
                switch (item)
                {
                    case 'I':
                        break;
                    case 'V':
                        break;
                    case 'X':
                        break;
                    case 'L':
                        break;
                    case 'C':
                        break;
                    case 'D':
                        break;
                    case 'M':
                        break;
                    default:
                        Validation = false;
                        break;
                }
            }
        }
        else
        {
            Validation = false;
        }
        return Validation;
    }
}